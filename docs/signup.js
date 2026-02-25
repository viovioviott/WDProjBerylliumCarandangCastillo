
const KEY = 'notes';

function loadNotes() {
      const raw = localStorage.getItem(KEY);

      if (raw){
        return JSON.parse(raw);
      }
      else{
        return [];
      }
    }

function saveNotes(entries) {
  localStorage.setItem(KEY, JSON.stringify(entries));
}

const submitSignup = document.getElementById('Signup');
submitSignup.addEventListener("click", function(e) {
  e.preventDefault(); // to avoid immediately resetting the data
  const password = document.getElementById('pswrd').value.trim();
  const user = document.getElementById('user').value.trim();
  let starter =
  {
    user: user, 
    password: password,
    data : []
  };
  let notes = loadNotes(); // when signingup the recently created account becomes first in queue
  notes.push(starter);
  saveNotes(notes);
  alert("Signup successful");

  localStorage.setItem("record", "in");

  //document.getElementById("pswrd").innerHTML = "";
  //document.getElementById("user").innerHTML = "";
});

const submitLogin = document.getElementById('Login');
submitLogin.addEventListener("click", function(e) {
  e.preventDefault(); // to avoid immediately resetting the data
  const password = document.getElementById('pswrd').value.trim();
  const user = document.getElementById('user').value.trim();

  let notes = loadNotes();
  for (i in notes){
    if (notes[i].user == user){
      if (notes[i].password == password){
      let package = notes;
      package.push(notes[i]); // when logging in the logged in account becomes cloned and pushed into the first in queue (although not that efficient)
      saveNotes(package);
      localStorage.setItem("record", "in");
      }
      else{
        alert("Incorrect password inputted");
      }
    }
  }

  if (localStorage.getItem("record")=="in"){
    alert("Login successful");
  }

  //document.getElementById("pswrd").innerHTML = "";
  //document.getElementById("user").innerHTML = "";
});

const submitLogout = document.getElementById('Logout');
submitLogout.addEventListener("click", function(e) {
      localStorage.setItem("record", "out"); // first in queue becomes 0, so that means that there is no account logged in
      alert("Logout successful");
      //document.getElementById("pswrd").innerHTML = "";
      //document.getElementById("user").innerHTML = "";
    });