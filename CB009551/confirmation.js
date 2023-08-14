document.addEventListener("DOMContentLoaded", () =>{
    const namecell = document.getElementById('summary-name');
    const mobilecell = document.getElementById('summary-mobile');
    const emailcell = document.getElementById('summary-email');
    const gendercell = document.getElementById('summary-gender');
    const summaryDateCell = document.getElementById('summary-date');

    const sladultcell = document.getElementById('SLadultCharge');
    const slchildcell = document.getElementById('SLchildCharge');
    const fadultcell = document.getElementById('FadultCharge');
    const fchildcell = document.getElementById('FchildCharge');
    const totalpaycell = document.getElementById('totalPayable');
    const timecell = document.getElementById('summary-time');
    const durationcell = document.getElementById('summary-duration');

    timecell.textContent = localStorage.getItem('timecell');
    durationcell.textContent = localStorage.getItem('durationcell');

    sladultcell.textContent = localStorage.getItem('sladult');
    fadultcell.textContent = localStorage.getItem('foreignadult');
    slchildcell.textContent = localStorage.getItem('slchild');
    fchildcell.textContent = localStorage.getItem('foreignchild');
    totalpaycell.textContent = localStorage.getItem('payable');


    mobilecell.textContent = localStorage.getItem('selectedPhone');
    summaryDateCell.textContent = localStorage.getItem('selectedDate');
    namecell.textContent = localStorage.getItem('selectedName');
    emailcell.textContent = localStorage.getItem('selectedEmail');
});


