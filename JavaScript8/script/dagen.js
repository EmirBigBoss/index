const setup = () => {
    let today = new Date();
    let myBirth = new Date(2001,3,17);

    let amount_of_days = (today.getTime() - myBirth.getTime())/1000;
    let amount2 = amount_of_days/3600;
    let amount3 = amount2/24;

    console.log(Math.ceil(amount3));
}

window.addEventListener('load', setup);