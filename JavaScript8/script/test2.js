const setup = () => {
    let student1 = {
        Jaar: new Date(2001).getTime(),
        Stad: "Kortrijk",
        VoedselInname: {
            Maandag: 25 + "kcal",
            Dinsdag: 90 + "kcal",
            Woensdag: 0 + "kcal",
            Donderdag: 255 + "kcal",
            Vrijdag: 122 + "kcal",
            Vrijdag: 122+ "kcal",
            Zaterdag: 39 + "kcal",
            Zondag: 0.00003 + "kcal"
        }
    }

    let jsonObject = JSON.stringify(student1);
    console.log(jsonObject);
}

const setup2 = () => {
    let string = '{"Jaar":2001,"Stad":"Kortrijk","VoedselInname":{"Maandag":"25kcal","Dinsdag":"90kcal","Woensdag":"0kcal","Donderdag":"255kcal","Vrijdag":"122kcal","Zaterdag":"39kcal","Zondag":"0.00003kcal"}}';
    let student2 = JSON.parse(string);
    console.log(student2.Jaar, student2.VoedselInname)
}

window.addEventListener('load', setup);
window.addEventListener('load', setup2);
