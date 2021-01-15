// working with file system
const fs = require("fs");
const path = require("path");

/*
// create a folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");
});

// create and write to file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;
    console.log("File written to...");

    // append to file
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " Hello Append Text!",
      (err) => {
        if (err) throw err;
        console.log("File written to...");
      }
    );
  }
);

// read file
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloworld.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed...");
  }
);

*/

// write the users in a file and the display them

const users = [
  { name: "Samuel" },
  { name: "Joe" },
  { name: "Christen" },
  { name: "Meili" },
];

// create a folder
fs.mkdir(path.join(__dirname, "/data"), {}, (err) => {
  if (err) throw err;
  console.log("Folder created...");

  // create file and write JSON data

  fs.writeFile(
    path.join(__dirname, "/data", "name.json"),
    JSON.stringify(users),
    (err) => {
      if (err) throw err;
      console.log("File created and data written to...");

      // read file
      fs.readFile(
        path.join(__dirname, "/data", "name.json"),
        "utf8",
        (err, users) => {
          if (err) throw err;

          // display user name
          JSON.parse(users).forEach((user) => {
            console.log(user.name);
          });

          console.log("All user names displayed...");

          // rename the file
          fs.rename(
            path.join(__dirname, "/data", "name.json"),
            path.join(__dirname, "/data", "users.json"),
            (err) => {
              if (err) throw err;
              console.log("File renamed successfully...");
            }
          );
        }
      );
    }
  );
});

// delete an empty folder myFolderToDelete
// fs.rmdir(path.join(__dirname, "/myFolderToDelete"), (err) => {
//   if (err) throw err;
//   console.log("Folder deleted...");
// });

// read the contents of a directory
fs.readdir(__dirname, (err, files) => {
  if (err) throw err;
  console.log(files);
});

// copy a file
fs.copyFile(path.join(__dirname, 'fs.js'), path.join(__dirname, 'destination.txt'), (err) => {
  if(err) throw err;
  console.log('File copied...');
});
