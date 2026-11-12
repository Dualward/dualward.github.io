/* ------------------------------------------------------------------
   Dualward - settings you may need to change

   googleClientId
     Leave it empty and the software runs entirely on this computer.
     To switch Google Drive sync on, paste the OAuth Client ID from
     your Google Cloud project here. Setup steps are in README.md.

     This ID is public by design. It is safe to leave it in the file,
     because Google only accepts it from the website addresses you
     list under "Authorised JavaScript origins".

   driveFileName
     The name of the single file the software keeps in Google Drive.

   drivePollSeconds
     How often an idle device looks to see whether another device has
     been entering. 60 is right for a shop. Raise it on a slow or
     metered connection, lower it if two counters work side by side.
     Minimum 15.

   allowedGoogleAccounts
     The Google account or accounts this register belongs to. The
     software refuses to sync with any other account, so signing in
     with a personal Gmail by mistake cannot copy the shop's register
     into the wrong Drive, and cannot quietly start a second empty one.
     Leave the list empty to allow any account.

   ownerPasswordHashes
     The owner password is fixed here and cannot be set or changed from
     the screen. The two values are the same password hashed two ways
     (the second is used when the page is opened from a folder rather
     than over https). To change the password, replace both - see
     README.md. The password itself is not written in these files.

   ownerAutoLockMinutes
     How long the owner stays logged in with no use before Stock,
     Reports, History and Setup lock again. Default 10.
------------------------------------------------------------------ */
window.SUNSHINE_CONFIG = {
  businessName:  "DUALWARD",
  googleClientId: "280793711310-jdvsbvu0ur7ioqq20fjn8mrsl3m5ffcq.apps.googleusercontent.com",
  driveFileName: "sunshine-fabrics-register.json",
  drivePollSeconds: 60,
  allowedGoogleAccounts: ["app.sunshinefabrics@gmail.com"],
  ownerPasswordHashes: ["sha256:526d86b0521e614eb0419d298c5e4c832b9c180c104de20de0274686ed148840", "fnv:c153d0b0"],
  ownerAutoLockMinutes: 10
};
