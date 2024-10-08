document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('seat-popup');
    const reserveButtons = document.querySelectorAll('.reserve-button');
    const closeButton = document.querySelector('.close-btn');
    const confirmButton = document.getElementById('confirm-reservation');

    const seatContainer = document.getElementById('seat-container');
    const selectedSeatsElement = document.getElementById('selected-seats');
    const totalPriceElement = document.getElementById('total-price');
    const seatCountInput = document.getElementById('seat-count');

    let selectedSeats = [];
    const seatPrice = 100; // Pris pr. sæde i kr
    let seatsPerRow = 8;   // Antal sæder pr. række
    let maxSelectableSeats = parseInt(seatCountInput.value); // Antal sæder brugeren vil have

    // Opret sæde-layout
    function createSeats(rows = 7, seatsPerRow = 8) {
        seatContainer.innerHTML = ''; // Ryd containeren

        for (let row = 1; row <= rows; row++) {
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('row');

            // Tilføj række nummer
            const rowNumber = document.createElement('span');
            rowNumber.classList.add('row-number');
            rowNumber.textContent = row;
            rowDiv.appendChild(rowNumber);

            // Opret sæder for hver række
            for (let seat = 1; seat <= seatsPerRow; seat++) {
                const seatDiv = document.createElement('div');
                seatDiv.classList.add('seat');
                seatDiv.dataset.row = row;
                seatDiv.dataset.seat = seat;

                // Tilføj klik-event for at vælge sæder ved siden af hinanden
                seatDiv.addEventListener('click', function() {
                    if (!seatDiv.classList.contains('occupied')) {
                        handleSeatSelection(row, seat, seatDiv);
                    }
                });

                rowDiv.appendChild(seatDiv);
            }

            seatContainer.appendChild(rowDiv);
        }
    }

    // Håndtering af sædevalg
    function handleSeatSelection(row, seat, seatDiv) {
        maxSelectableSeats = parseInt(seatCountInput.value); // Opdater max sæder brugeren vil have

        const selectedInRow = Array.from(document.querySelectorAll(`.seat.selected[data-row="${row}"]`))
            .map(s => parseInt(s.dataset.seat));

        if (selectedSeats.length < maxSelectableSeats || seatDiv.classList.contains('selected')) {
            // Hvis sædet er valgt, fjern det
            if (seatDiv.classList.contains('selected')) {
                seatDiv.classList.remove('selected');
                selectedSeats = selectedSeats.filter(s => s !== seatDiv);
            } else {
                // Check om vi kan vælge sammenhængende sæder
                if (canSelectSeat(selectedInRow, seat)) {
                    seatDiv.classList.add('selected');
                    selectedSeats.push(seatDiv);
                } else {
                    alert('Sæderne skal være ved siden af hinanden!');
                }
            }
            updateSelectedSeats();
        } else {
            alert(`Du kan kun vælge ${maxSelectableSeats} sæder.`);
        }
    }

    // Tjek om vi kan vælge et sæde ved siden af eksisterende valgte sæder
    function canSelectSeat(selectedInRow, seat) {
        if (selectedInRow.length === 0) return true; // Hvis ingen sæder er valgt, er der ingen restriktioner

        // Sortér sæderne og tjek, om det nye sæde er sammenhængende med de valgte sæder
        selectedInRow.sort((a, b) => a - b);
        return seat === selectedInRow[0] - 1 || seat === selectedInRow[selectedInRow.length - 1] + 1;
    }

    // Opdater valgte sæder og pris
    function updateSelectedSeats() {
        const seatNumbers = selectedSeats.map(seat => `Række ${seat.dataset.row}, Sæde ${seat.dataset.seat}`);

        selectedSeatsElement.textContent = `Valgte pladser: ${seatNumbers.length > 0 ? seatNumbers.join(', ') : 'Ingen'}`;
        totalPriceElement.textContent = `Totalpris: ${seatNumbers.length * seatPrice} kr.`;
    }

    // Når reserver-knappen klikkes, vis modal og generér sæder
    reserveButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'flex'; // Vis modal
            createSeats(); // Generér sæder
        });
    });

    // Luk modal
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Skjul modal
    });

    // Bekræft reservation
    confirmButton.addEventListener('click', function() {
        alert('Sæder reserveret!');
        modal.style.display = 'none'; // Skjul modal efter reservation
    });
});

function renderSeats(rows, seatsPerRow) {
    const seatContainer = document.getElementById('seat-container');
    seatContainer.innerHTML = '';  // Tøm containeren først

    for (let row = 1; row <= rows; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');  // Tilføjer en container til hver række

        // Tilføj række nummer
        const rowNumber = document.createElement('div');
        rowNumber.classList.add('row-number');
        rowNumber.textContent = row;  // Viser række nummer
        rowDiv.appendChild(rowNumber);

        for (let seat = 1; seat <= seatsPerRow; seat++) {
            const seatDiv = document.createElement('div');
            seatDiv.classList.add('seat');
            seatDiv.dataset.row = row;
            seatDiv.dataset.seat = seat;

            // Tilføj klik-event for at vælge sæder
            seatDiv.addEventListener('click', function() {
                if (!seatDiv.classList.contains('occupied')) {
                    handleSeatSelection(row, seat, seatDiv);
                }
            });

            rowDiv.appendChild(seatDiv);
        }

        // Tilføjer rækken til seat-container
        seatContainer.appendChild(rowDiv);
    }
}







