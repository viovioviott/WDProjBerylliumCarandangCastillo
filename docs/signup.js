
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
  package = loadNotes().push(starter);
  saveNotes(package);
});

const submitLogin = document.getElementById('Login');
submitLogin.addEventListener("click", function(e) {
  e.preventDefault(); // to avoid immediately resetting the data
  const password = document.getElementById('pswrd').value.trim();
  const user = document.getElementById('user').value.trim();

  for (i in loadNotes()){
    if (loadnotes[i].user == user){
      package = loadNotes().push(loadnotes[i]);
      saveNotes(package);
    }
  }
});