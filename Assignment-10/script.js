const para = document.getElementById("para1");
const word = document.getElementById("para2");
const tagSelect = document.getElementById("option");
const includeHtmlCheckbox = document.getElementById("includeHtml");
const generateBtn = document.getElementById("btn");
const loremOutput = document.getElementById("loremOutput");
const copyBtn = document.getElementById("copyBtn");
const copyMsg = document.getElementById("copyMsg");

const wordlist = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit",
    "Non", "neque", "impedit", "molestias", "quas", "possimus", "blanditiis",
    "maxime", "placeat", "corporis", "ex"
];

function generatetext() {
    return wordlist[Math.floor(Math.random() * wordlist.length)];
}

function generatepara(wordcount) {
    let words = [];
    for (let i = 0; i < wordcount; i++) {
        words.push(generatetext());
    }
    return words.join(" ");
}

function generateLoremIpsum() {
    const paraCount = parseInt(para.value);
    const wordCount = parseInt(word.value);
    const selectedTag = tagSelect.value;
    const includeHtml = includeHtmlCheckbox.checked;

    let result = "";

    for (let i = 0; i < paraCount; i++) {
        const paragraph = generatepara(wordCount);
        if (includeHtml && selectedTag !== "") {
            result += `<${selectedTag}>${paragraph}</${selectedTag}>\n`;
        } else {
            result += paragraph + "\n\n";
        }
    }

    if (includeHtml) {
        loremOutput.innerHTML = result;
    } else {
        loremOutput.innerText = result;
    }
}


copyBtn.addEventListener("click", () => {
    const textToCopy = loremOutput.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyMsg.style.display = "block";
        setTimeout(() => {
            copyMsg.style.display = "none";
        }, 1500);
    });
});

generateBtn.addEventListener("click", generateLoremIpsum);
