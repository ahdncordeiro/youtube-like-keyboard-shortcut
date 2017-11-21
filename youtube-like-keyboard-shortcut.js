var shouldAddEventListener;
// define a handler
function doc_keyUp(e) {
    // this would test if keyCode 219 ([) or keyCode 221 (]) was pressed
    if (e.keyCode == 219) {
      console.log("Keyboard for like triggered.");
      document.querySelector("#top-level-buttons > ytd-toggle-button-renderer:nth-child(1) > a").click();
    } else if (e.keyCode == 221) {
      console.log("Keyboard for dislike triggered.");
      document.querySelector("#top-level-buttons > ytd-toggle-button-renderer:nth-child(2) > a").click();      
    }
}

// register the handler 
if ((shouldAddEventListener == null ? true : shouldAddEventListener)) {
    shouldAddEventListener = false;
    console.log("Adding YouTube like keyboard shortcut event listener...")
    document.addEventListener('keyup', doc_keyUp, false);
}
