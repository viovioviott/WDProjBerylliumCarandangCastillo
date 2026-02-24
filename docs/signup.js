
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
  starter =
  {
    user: user, 
    password: password,
    data : []
  };
  let notes = loadNotes()
  package = notes.push(starter); // when signingup the recently created account becomes first in queue
  saveNotes(package);

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
      package = notes.push(notes[i]); // when logging in the logged in account becomes cloned and pushed into the first in queue (although not that efficient)
      saveNotes(package);
    }
  }

  //document.getElementById("pswrd").innerHTML = "";
  //document.getElementById("user").innerHTML = "";
});

const submitLogout = document.getElementById('Logout');
submitLogout.addEventListener("click", function(e) {
      let notes = loadNotes();
      package = notes.push(0);
      saveNotes(package); // first in queue becomes 0, so that means that there is no account logged in

      //document.getElementById("pswrd").innerHTML = "";
      //document.getElementById("user").innerHTML = "";
    });