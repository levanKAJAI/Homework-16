function convertTime() {

    let time = prompt("შეიყვანე დრო (მაგალითად: 10:23)");
    let period = prompt("შეიყვანეთ PM ან AM").toUpperCase();

    let parts = time.split(":");
    let hours = Number(parts[0]);
    let minutes = parts[1];

    if (period === "PM" && hours < 12) {
        hours += 12;
    }

    if (period === "AM" && hours === 12) {
        hours = 0;
    }

    let result = hours.toString().padStart(2, "0") + ":" + minutes;

    alert("მიმდინარე დროა: " + result);
    console.log("მიმდინარე დროა: " + result);
}

convertTime();

