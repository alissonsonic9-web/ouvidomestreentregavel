import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, setDoc, getFirestore } from 'firebase/firestore';

export async function getModuleProgress(userId: string): Promise<string[]> {
  const db = getFirestore();
  const userDocRef = doc(db, 'users', userId);
  const userDoc = await getDoc(userDocRef);

  if (userDoc.exists()) {
    return userDoc.data().completedModules || [];
  } else {
    // Optionally create the document if it doesn't exist
    await setDoc(userDocRef, { completedModules: [] });
    return [];
  }
}

export async function toggleModuleCompletion(userId: string, moduleId: string, isCompleted: boolean) {
  const db = getFirestore();
  const userDocRef = doc(db, 'users', userId);
  
  if (isCompleted) {
    // If it's already completed, we want to remove it
    await updateDoc(userDocRef, {
      completedModules: arrayRemove(moduleId)
    });
  } else {
    // If it's not completed, we want to add it
    await updateDoc(userDocRef, {
      completedModules: arrayUnion(moduleId)
    });
  }
}

export async function setLastAccessedModule(userId: string, moduleId: string) {
  const db = getFirestore();
  const userDocRef = doc(db, 'users', userId);
  await setDoc(userDocRef, { 
    lastAccessedModuleId: moduleId 
  }, { merge: true });
}
