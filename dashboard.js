
// Create summary chart using Chart.js
function createSummaryChart() {
    const ctx = document.getElementById('summaryChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                datasets: [{
                    label: 'Food Consumed',
                    data: [12, 19, 3, 5, 2, 3, 10],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }, {
                    label: 'Food Spoiled',
                    data: [2, 3, 1, 2, 1, 1, 3],
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    } else {
        console.error('Canvas element with id "summaryChart" not found.');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const summaryCtx = document.getElementById('summaryChart').getContext('2d');
    const summaryChart = new Chart(summaryCtx, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Food Consumed',
                data: [12, 19, 3, 5, 2, 3, 10],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }, {
                label: 'Food Wasted',
                data: [2, 3, 1, 2, 1, 1, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });



    const calendarTitle = document.getElementById("calendarTitle");
    const calendarBody = document.getElementById("calendarBody");
    const prevMonth = document.getElementById("prevMonth");
    const nextMonth = document.getElementById("nextMonth");
    
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let today = new Date();
    
    function renderCalendar(month, year) {
        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];
    
        calendarTitle.innerText = `${monthNames[month]} ${year}`;
        calendarBody.innerHTML = "";
    
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
    
        let row = document.createElement("tr");
        for (let i = 0; i < firstDay; i++) {
            row.appendChild(document.createElement("td"));
        }
    
        for (let day = 1; day <= daysInMonth; day++) {
            const cell = document.createElement("td");
            cell.innerText = day;
    
            // Highlight today's date
            if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
                cell.classList.add("active");
            }
    
            cell.addEventListener("click", () => {
                document.querySelectorAll(".calendar td").forEach((td) => td.classList.remove("active"));
                cell.classList.add("active");
            });
    
            row.appendChild(cell);
    
            if ((firstDay + day) % 7 === 0 || day === daysInMonth) {
                calendarBody.appendChild(row);
                row = document.createElement("tr");
            }
        }
    }
    
    prevMonth.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
    });
    
    nextMonth.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
    });
    
    // Initial render
    renderCalendar(currentMonth, currentYear);
    
    


    

    const storageCtx = document.getElementById('storageChart').getContext('2d');
    const storageChart = new Chart(storageCtx, {
        type: 'doughnut',
        data: {
            labels: ['Freezer', 'Fridge', 'Pantry'],
            datasets: [{
                data: [300, 200, 100],
                backgroundColor: [
                    'rgba(255, 152, 3, 0.6)',
                    'rgba(11, 85, 62, 0.6)',
                    'rgba(47, 159, 75, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 152, 3, 0.6)',
                    'rgba(11, 85, 62, 0.6)',
                    'rgba(47, 159, 75, 0.6)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Storage Distribution'
                }
            }
        }
    });

    document.getElementById('summaryPeriod').addEventListener('change', function() {
        console.log('Summary period changed to:', this.value);
    });
});

