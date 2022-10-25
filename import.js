function appendHTML() {
        var wrapper = document.createElement("div");
        wrapper.innerHTML = '<script src="https://collertabber.github.io/proxy-idk/client.js"></script> \
<style src="https://collertabber.github.io/proxy-idk/style.css"></script> \
<button class="bookmarklets" onclick="add()">Add</button> \
<button class="bookmarklets" onclick="load()">Load</button> \
<button class="bookmarklets" onclick="clear()">Clear</button> \
<button class="bookmarklets" onclick="list()">List</button> \
';
        document.body.appendChild(wrapper);
    }
let c = appendHTML();
