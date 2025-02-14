document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.text-section');
    let currentSection = 0;
    let isScrolling = false;
    const SWIPE_THRESHOLD = 30;

    const texts = [
        `Amuuuuuuuuu, sorry I can't be there with you right now, being our first Valentine's, I do really wish I could've spent the day with you.
Being the day before my boards and the day of your chem exam, we're both supposed to be busy asf.
And sadly you don't like me getting you any gift, and I didn't have a chance to get you anything either.
So I kinda whipped this up with what time I had left, so bear with me if this looks awful.`,

        `Soo basically, I know I've said this a lot, but it still means all the same and it comes from my heart.`,

        `You came to me at a time when I was a straight-up menace to society, I was really down and stuff
So angane irikkumbo, what made me actually notice you is Nived bullying you. I actually asked people about you, what mainly everybody said was "she has a very conservative family, angott nokkanda". 
So initially, I thought you were a boring person and that you wouldn't talk to boys at all (cuz of the silent treatment towards Nived). 
Being my most trusted 11th grader, I asked Gautam for advice (don't kill me pls). So he told me the same thing others said, and also said you were kinda boring and try cheythittum karyamilla ennu. 
Do I listen to them? (I'm not just anybody).`,

        `Appo I decided, I'll chumma msg you, angane avasaram nokki irikkumbo, your award thing comes up. 
I take the chance, and the first message I send is "congrats sechiiiii". 
Later it came to my attention that, you do not wanna call your crush sechi or chechi. 
Angane first move, 3nji ennu vicharich irikkumbo, you reply and you actually talk nice. 
So next step, how to keep the conversation going. 
I'm at a total loss, idk what to do, appo I thought what do I normally do when I congratulate someone, ASK FOR A DAMN TREAT. 
Somehow, actually due to a reading error on my part, then I discovered you're from Kollam. Angane pinne click ayi.`,

        `You are THE only person with whom I didn't actually have to try to talk with, like mostly with people, I've to get to know them and then talk bout their interests and stuff. 
With you, I just fit right in. 
If I'm being just me with anyone, it's literally only with you. 
You complete me. ❤️`
    ];

    function typeWriterEffect(element, text, index = 0) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            setTimeout(() => typeWriterEffect(element, text, index + 1), 50);
        }
    }

    function showNextSection() {
        if (currentSection < sections.length - 1) {
            sections[currentSection].classList.remove('active');
            currentSection++;
            sections[currentSection].classList.add('active');

            const textElement = document.getElementById(`text${currentSection + 1}`);
            if (textElement.innerHTML === "") {
                typeWriterEffect(textElement, texts[currentSection]);
            }
        }
    }

    function showPreviousSection() {
        if (currentSection > 0) {
            sections[currentSection].classList.remove('active');
            currentSection--;
            sections[currentSection].classList.add('active');
        }
    }

    // Initialize the first text
    typeWriterEffect(document.getElementById("text1"), texts[0]);

    document.addEventListener('wheel', (event) => {
        event.preventDefault();
        if (!isScrolling) {
            isScrolling = true;
            if (event.deltaY > 0) {
                showNextSection();
            } else if (event.deltaY < 0) {
                showPreviousSection();
            }
            setTimeout(() => { isScrolling = false; }, 500);
        }
    }, { passive: false });

    document.addEventListener('touchstart', (event) => {
        touchStartY = event.touches[0].clientY;
    });

    document.addEventListener('touchend', (event) => {
        const touchEndY = event.changedTouches[0].clientY;
        const deltaY = touchEndY - touchStartY;

        if (!isScrolling) {
            isScrolling = true;
            if (deltaY < -SWIPE_THRESHOLD) {
                showNextSection();
            } else if (deltaY > SWIPE_THRESHOLD) {
                showPreviousSection();
            }
            setTimeout(() => { isScrolling = false; }, 500);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (!isScrolling) {
            isScrolling = true;
            if (event.key === 'ArrowDown') {
                showNextSection();
            } else if (event.key === 'ArrowUp') {
                showPreviousSection();
            }
            setTimeout(() => { isScrolling = false; }, 500);
        }
    });

    console.log("Script loaded successfully!");
});
function nextpage(){
    window.location = "reasons.html";
}