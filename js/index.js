// Данные
let count = 0;
let button = document.querySelector(`button`);
let method = [
    `Технологии`, `Методы`, `Направления`
]
let category = [`детей`, `семей`, `инвалидов`, `пожилых`];
let underCategory = ["-сирот ", " ОбПР", "-дошкольников", "-подростков ", "-девиантов "];
let technology = ["реабилитации ", "адаптации ", "консультирования ", "терапии ", "профилактики ", "патроната "];
let organization = ["ТЦСО", "ЦМД", "ЦССВ", "ЦСПСиД", "ОСЗН"];
let level = [" России"," региона"," города"];


function randomInteger(max) {
    let rnd = Math.random() * max;
    return Math.floor(rnd);
}

button.addEventListener(`click`, function () {
    let categoryIndex = document.querySelector(`#category`).value;
    let underCategoryIndex = document.querySelector(`#underCategory`).value;
    let technologyIndex = document.querySelector(`#technology`).value;
    let organizationIndex = document.querySelector(`#organization`).value;
    let levelIndex = document.querySelector(`#level`).value;
    let social = ` социальной `;

    if (categoryIndex == 99) { categoryIndex = randomInteger(category.length); }
    if (underCategoryIndex == 99) { underCategoryIndex = randomInteger(underCategory.length); }
    if (technologyIndex == 99) { technologyIndex = randomInteger(technology.length); }
    if (organizationIndex == 99) { organizationIndex = randomInteger(organization.length); }
    if (levelIndex == 99) { levelIndex = randomInteger(level.length); }


    if (technologyIndex == 2 || technologyIndex == 5) { social = ` социального ` }

    for (let i = 0; i < method.length; i++) {
        count++
        let topic = method[i] +
            social +
            technology[technologyIndex] +
            category[categoryIndex] +
            underCategory[underCategoryIndex] +
            `(на примере ` +
            organization[organizationIndex] +
            level[levelIndex] + `)`;
        let list = document.querySelector(`#list`)
        list.innerHTML += `
            <div class="card mb-3">
                <div class="card-body" >
                    <h5 class="card-title">
                        <span>Тема диплома №${count}</span>
                    </h5>
                    <p class="card-text">${topic}</p>
                </div>
            </div>
            `
    }
})


