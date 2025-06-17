const cal_last = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const now = new Date();
let now_month = now.getMonth();

function coute_mon_down() {
    if(now_month > 0) {
        now_month--;
    }
    now_show_mod();
}
function coute_mon_up() {
    if(now_month < 11) {
        now_month++;
    }
    now_show_mod();
}

now_show_mod()
function now_show_mod() {
    document.querySelector('.show_mon').textContent = now_month + 1;
    cal();
}

function cal() {
    const cal_body = document.getElementById('cal_body');
    cal_body.innerHTML = '';
    const year = 2025;
    const first_day = new Date(year, now_month, 1).getDay();
    const last_date = cal_last[now_month];

    if (now_month === 1) {
        const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        if (isLeap) cal_last[1] = 29;
    }
    let tr = document.createElement('tr');
    for (let i = 0; i < first_day; i++) {
        const empty_td = document.createElement('td');
        tr.appendChild(empty_td);
    }
    for (let day = 1; day <= last_date; day++) {
        const td = document.createElement('td');
        td.classList.add('cal_item');
        td.textContent = day;
        tr.appendChild(td);

        if ((first_day + day) % 7 === 0) {
            cal_body.appendChild(tr);
            tr = document.createElement('tr');
        }
    }
    if (tr.children.length > 0) {
        if(tr.querySelectorAll('td').length !== 7) {
            let empty_cout = 7 - (tr.querySelectorAll('td').length);
            for(let j = 1;j <= empty_cout;j++) {
                const last_empty_td = document.createElement('td');
                last_empty_td.classList.add('cal_item');
                tr.appendChild(last_empty_td);
            }
        }
        cal_body.appendChild(tr);
    }
}