import admin from 'firebase-admin';
import * as serviceAccount from '../config/serviceAccountKey.json'; // Ajusta la ruta según la ubicación real del archivo

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;
