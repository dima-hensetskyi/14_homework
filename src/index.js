import { getTheRest } from "./hw1";
import { sum } from "./hw2";
import { getRandomNumber } from "./hw3";
import { breakIntoPairs } from "./hw4";
import { setThemsForStudens } from "./hw4";
import { numberFilter } from "./hw5";
import { getAverage } from "./hw5";
import { getAverageMark } from "./hw6";
import { getMiddleTaxes } from "./hw7";
import { Students } from "./hw8";
import { randomColor } from "./hw9";
import { generateBlocks } from "./hw9";
import { generateBlocksInterval } from "./hw9";
import { playSound } from "./hw10";
import { removeTransition } from "./hw10";
import { creatAudio } from "./hw10"
import "./style.css"
import { getRandomChinese } from "./hw11";
import { getCharacters } from "./hw12";
import { createIdGenerator } from "./hw13";

console.log(getTheRest(500));

console.log(sum(10, 100, true));

console.log(getRandomNumber(5, 9));

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const breakStudentIntoPairs = breakIntoPairs(students);
const setThems = setThemsForStudens(breakStudentIntoPairs, themes);
console.log(setThems);

console.log(getAverage(6, 2, 55, 11, 78, 2, 55));

const students2 = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
    }, {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
    }, {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
    }];
console.log(getAverageMark(students2[0]));



const student = new Students("Львівська Політехніка", 6, "Остап Бендер");
console.log(student.getInfo);

generateBlocksInterval();

getRandomChinese(10).then((result) => console.log(result));


const audio = document.getElementById("audio");
creatAudio();
const keys = document.querySelectorAll(".key");
keys.forEach(function (key) {
    key.addEventListener('click', playSound);
})
window.addEventListener("keydown", playSound);
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

const table = document.getElementById("characters-table");
const showInformation = document.getElementById(`show-information`);
const selectEpisode = document.getElementById(`select-episode`);

showInformation.addEventListener("click", () => {
    const episode = selectEpisode.value;
    table.innerHTML = `
    <tr>
    <th>Name</th>
    <th>Date of birth</th>
    <th>Gender</th>
    </tr>
    `
    getCharacters(episode);
});


const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
