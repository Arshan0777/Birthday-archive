const levels = document.querySelectorAll(".level");

let currentLevel = 0;

let openedArtifacts = [];

function showLevel(index){

    levels.forEach(level=>{
        level.classList.remove("active");
    });

    levels[index].classList.add("active");
    if(index === 1){
        runAgeAnimation();
    }


    const progress =
        ((index + 1) / levels.length) * 100;

    document.getElementById("progressBar")
        .style.width = progress + "%";
}

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("next-btn")){

        if(currentLevel < levels.length - 1){

            currentLevel++;

            showLevel(currentLevel);
        }
    }

    if(e.target.classList.contains("prev-btn")){

        if(currentLevel > 0){

            currentLevel--;

            showLevel(currentLevel);
        }
    }

});

showLevel(0);

const title = document.getElementById("typewriter");

const text = "THE ARCHIVE";

let i = 0;

function typeWriter(){

    if(!title) return;

    if(i < text.length){

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,120);
    }
}

typeWriter();

function runAgeAnimation(){

    const ageElement =
        document.getElementById("ageCounter");

    if(!ageElement) return;

    ageElement.textContent = "21";

    setTimeout(()=>{

        ageElement.textContent = "22 🎉";

    },1200);

}
function showEvidence(type){

    const output =
    document.getElementById(
        "evidenceOutput"
    );

    const memories = {

        flowers:
        "Evidence shows the subject gave flowers on two separate occasions. Unusual behavior detected.",

        crochet:
        "A handmade crochet beanie and keychains were exchanged. High effort level confirmed.",

        shawarma:
        "A homemade favorite meal was prepared. Subject appears important.",

        airpods:
        "AirPods pouch was given to keep his things organized."
    };

    output.innerHTML =
    memories[type];
}
function runAnalysis(){

    const traits = [

        {
            id:"trait1",
            value:"Detected ✓"
        },

        {
            id:"trait2",
            value:"Very High ✓"
        },

        {
            id:"trait3",
            value:"Strongly Detected"
        },

        {
            id:"trait4",
            value:"Extremely Detected"
        },

        {
            id:"trait5",
            value:"22 Years Old 🎉"
        }

    ];

    traits.forEach((trait,index)=>{

        const element =
        document.getElementById(
            trait.id
        );

        if(element){

            element.textContent="...";

            setTimeout(()=>{

                element.textContent =
                trait.value;

            },(index+1)*800);
        }

    });

}

let openedObservations = 0;

function revealObservation(card){

    if(card.classList.contains("open")) return;

    card.classList.add("open");

    openedObservations++;

    if(openedObservations === 6){

        document
        .getElementById("finalConclusion")
        .style.display = "block";
    }
}
const artifacts = [

`
<h2>Artifact #00</h2>

<h3>Meri Jaan + Sukoon</h3>

<p>

Some people give flowers.

Some people give gifts.

And sometimes,
without realizing it,

they give each other names
that become impossible to replace.

</p>

<p>

MERI JAAN

+

SUKOON

</p>

<p>

Status:

Still one of the archive's
most valuable discoveries.

</p>
`,

`
<h2>Artifact #01</h2>

<h3>First Flower</h3>

<p>

The archive confirms
that flowers were delivered.

Investigation continues
regarding their lasting effect.

Giving flowers confirms a promise of treating them like one.

</p>
`,

`
<h2>Artifact #02</h2>

<h3>The Hairband Incident</h3>

<p>

A completely ordinary hairband
was somehow upgraded into
a treasured possession.

Shows that even the simplest things
can become significant
when given with care.

</p>
`,

`
<h2>Artifact #03</h2>

<h3>BMW vs Baleno</h3>

<p>

Luxury vehicle unavailable.

Door-opening service promised.

Gentleman detected.

</p>
`,

`
<h2>Artifact #04</h2>

<h3>Late Night Conversations</h3>

<p>

Several nights were spent discussing:

dreams,
fears,
future plans,
and complete nonsense.

No regrets recorded.

</p>
`,

`
<h2>Artifact #05</h2>

<h3>Daily Check-Ups</h3>

<p>

Repeated messages detected:

Did you eat?

How was your day?

Are you okay?

Significant care level confirmed.

</p>
`
];

function openArtifact(index){

    if(!openedArtifacts.includes(index)){

        openedArtifacts.push(index);
    }

    checkSecretUnlock();

    document.getElementById(
        "artifactContent"
    ).innerHTML = artifacts[index];

    document.getElementById(
        "artifactModal"
    ).style.display = "block";
}
function checkSecretUnlock(){

    if(openedArtifacts.length === 6){

        const secret =
        document.getElementById(
            "secretArtifact"
        );

        secret.innerHTML =
        "📂 Artifact #06";

        secret.classList.remove(
            "locked-artifact"
        );
    }
}
function openSecretArtifact(){

    if(openedArtifacts.length < 6){

        alert(
            "Access Denied.\n\nRecover all artifacts first."
        );

        return;
    }

    document.getElementById(
        "artifactContent"
    ).innerHTML = `

    <h2>CLASSIFIED REPORT</h2>

    <h3>Final Analysis</h3>

    <p>

    The flowers.

    The chocolates.

    The hairband.

    The conversations.

    The effort.

    The concern.

    </p>

    <p>

    After reviewing all evidence,
    the archive reached
    one unavoidable conclusion.

    </p>

    <p>

    You became one of my favorite people.

    </p>

    `;

    document.getElementById(
        "artifactModal"
    ).style.display = "block";
}

function closeArtifact(){

    document.getElementById(
        "artifactModal"
    ).style.display = "none";
}
const secretTexts = [

`The first thing I liked about you
wasn't your looks.

It was the way you thought.`,

`I didn't expect
you to become this important.`,

`One of the things I trust most
about you is that
you never raised your voice at me.`,

`You probably don't realize this,
but some of my favorite memories
started as ordinary conversations.`
];

let secretIndex = 0;

function revealSecret(card){

    if(card.dataset.opened) return;

    card.innerHTML =
    secretTexts[secretIndex];

    card.dataset.opened = true;

    secretIndex++;
}


function answerQuestion(btn){

    if(btn.classList.contains("answered"))
        return;

    btn.classList.add("answered");

    totalAnswers++;

    if(totalAnswers >= 3){

        const result =
        document.getElementById(
            "compatibilityResult"
        );

        result.style.display = "block";

        result.innerHTML = `

        <h2>
        COMPATIBILITY REPORT
        </h2>

        <br>

        Subject A:
        Sukoon ✓

        <br><br>

        Subject B:
        Meri Jaan ✓

        <br><br>

        Shared Interests:
        Detected

        <br><br>

        Comfort Level:
        High

        <br><br>

        Archive Conclusion:

        Unexpectedly High Compatibility.

        <br><br>

        Further Investigation Recommended.

        `;
    }

}
let lessonsOpened = 0;

function revealLesson(card){

    if(card.classList.contains("open"))
        return;

    card.classList.add("open");

    lessonsOpened++;

    if(lessonsOpened === 5){

        document
        .getElementById(
            "lessonConclusion"
        )
        .style.display = "block";

    }

}
function answerQuestion(button){

    // Find the current question block
    const question = button.parentElement;

    // Remove selection from all buttons in this question
    question.querySelectorAll("button").forEach(btn=>{
        btn.classList.remove("selected");
    });

    // Highlight clicked button
    button.classList.add("selected");

}
let draftsOpened = 0;

function openDraft(card){

    if(card.classList.contains("open"))
        return;

    card.classList.add("open");

    draftsOpened++;

    if(draftsOpened === 4){

        document
        .getElementById("draftConclusion")
        .style.display = "block";

    }

}
let openedLetters = 0;

function openWhen(card){

    if(card.classList.contains("open"))
        return;

    card.classList.add("open");

    openedLetters++;

    if(openedLetters === 5){

        document
        .getElementById(
            "openWhenConclusion"
        )
        .style.display = "block";

    }

}
function openTransmission(){

    document
    .getElementById(
        "transmissionMessage"
    )
    .style.display = "block";

}
function openChest(){

    document
    .getElementById(
        "chestContent"
    )
    .style.display = "block";

}
function completeArchive(){

    document
    .getElementById(
        "finalReport"
    )
    .style.display = "block";

    setTimeout(()=>{

        document
        .querySelector(
            ".secret-ending"
        )
        .style.display = "block";

    },3000);

}
function openCapsule(){

    document
    .getElementById("capsuleMessage")
    .style.display="block";

    document
    .querySelector(".capsule-file")
    .innerHTML=`

        📂 time_capsule_23.exe

        <br><br>

        STATUS : OPENED

        <br>

        ACCESS GRANTED

    `;
}