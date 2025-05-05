// signup.js
import { db } from "./firebase-init.js";
import { addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

document.getElementById('signupForm').addEventListener('submit', async e => {
  e.preventDefault();
  const fullName = e.target.querySelector('input[name="fullName"]').value.trim();
  const email    = e.target.querySelector('input[name="email"]').value.trim();
  const role     = e.target.querySelector('select[name="role"]').value;

  if (!fullName || !email) {
    alert('Please enter name and email.');
    return;
  }

  try {
    await addDoc(collection(db, 'signups'), {
      fullName,
      email,
      role,
      createdAt: serverTimestamp()
    });
    alert('Sign‑up successful!');
    e.target.reset();
  } catch (err) {
    console.error('Sign‑up error:', err);
    alert('Could not complete sign‑up.');
  }
});
