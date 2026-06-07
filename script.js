let count = 0;

function send() {

    const input = document.getElementById("input");
    const chat = document.getElementById("chat");

    const text = input.value.trim();

    if(text === "") return;

    // Secret crash command
    if(text === "™") {

        chat.innerHTML += `
        <p><b>You:</b> ™</p>
        <p><b>System:</b> ⚠ Critical Error Detected...</p>
        `;

        input.disabled = true;
        input.value = "";

        setTimeout(() => {

            chat.innerHTML += `
            <p><b>System:</b> Chat crashed.</p>
            <p><b>System:</b> Try again after some time.</p>
            `;

            document.getElementById("buttons").style.display = "block";

        }, 2000);

        return;
    }

    count++;

    chat.innerHTML += `
    <p><b>You:</b> ${text}</p>
    `;

    let reply = "";

    if(count === 1){
        reply = "hey";
    }
    else if(count === 2){
        reply = "Yes, I am ready to help you.";
    }
    else if(count === 3){
        reply = "1";
    }

    chat.innerHTML += `
    <p><b>AI:</b> ${reply}</p>
    `;

    if(count >= 3){

        setTimeout(() => {

            chat.innerHTML += `
            <p><b>System:</b> AI chat limit ended.</p>
            <p><b>System:</b> Please start a new chat.</p>
            `;

            input.disabled = true;

            document.getElementById("buttons").style.display = "block";

        }, 1000);
    }

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}

function newChat(){
    location.reload();
}

function tryNewVersion(){
    alert("🚀 DemoGPT Pro Coming Soon!");
}
