import { FieldValue } from 'firebase-admin/firestore';
import { db } from './firebase-admin';

export async function toggleModuleCompletion(userId: string, moduleId: string, isCompleted: boolean) {
  const userDocRef = db.collection('users').doc(userId);
  
  if (isCompleted) {
    // If it's already completed, we want to remove it
    await userDocRef.update({
      completedModules: FieldValue.arrayRemove(moduleId)
    });
  } else {
    // If it's not completed, we want to add it
    await userDocRef.update({
      completedModules: FieldValue.arrayUnion(moduleId)
    });
  }
}
