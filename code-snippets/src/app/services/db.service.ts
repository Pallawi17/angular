import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getFirestore } from 'firebase/firestore';
 import { collection, addDoc, getDocs, doc, getDoc } from 'firebase/firestore';
import { Snippets } from '../../models/snippet';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  private db: any;
  constructor(private authService: AuthService, private router:Router) {
    this.db = getFirestore();
  }

  async createSnippet(snippet: Snippets) {
    const docRef = await addDoc(collection(this.db, 'snippet'), {
      ...snippet,
      by: this.authService.getUid(),
    });
    this.router.navigate(['/snippet/'+ docRef.id]);
  }

  async getAllSnippets() {
    const res: any = [];
    const querySnapshot = await getDocs(collection(this.db, 'snippet'));
    querySnapshot.forEach((doc) => {
      res.push({ id: doc.id, ...doc.data() });
    });
    return res;
  }

  async getSnippetById(docId: string): Promise<any> {
    try {
      const docRef = doc(this.db, 'snippet', docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching snippet:', error);
      throw error;
    }
  }
}
