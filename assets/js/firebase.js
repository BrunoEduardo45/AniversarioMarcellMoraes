import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
        import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCPJhR9HJhVkvFFk9IjitLGfxJ2bvGgBiY",
            authDomain: "aniversario-marcell-moraes.firebaseapp.com",
            projectId: "aniversario-marcell-moraes",
            storageBucket: "aniversario-marcell-moraes.firebasestorage.app",
            messagingSenderId: "759578737563",
            appId: "1:759578737563:web:9ca99e13ab16b9de163f3e"
        };

        // Inicializando o Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);