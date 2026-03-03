// Helper Selector
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// DOM Elements
const balance = $('#total-balance');
const income = $('#total-income');
const expense = $('#total-expense');
const list = $('#transaction-list');
const form = $('#transaction-form');
const text = $('#text');
const amount = $('#amount');
const modal = $('#modalOverlay');
const openModalBtn = $('#openModal');
const closeModalBtn = $('#close-btn');
const searchInput = $('#search-input');
const filterBtns = $$('.filter-btn');
// const deleteBtns = $$('.delete-btn');

const categoryIcons = {
    salary: '💰',
    food: '🍔',
    entertainment: '🎬',
    shopping: '🛍️',
    utilities: '⚡',
    other: '📦'
};

// Initial State
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let currentFilter = 'all';

function addTransaction(e) {

    const type = $('input[name="transaction-type"]:checked').value;

    const category = $('#category').value;

    let amt = Number(amount.value);

    if (type === 'expense') {
        amt = -amt;
    }

    const transaction = {
        id: Math.floor(Math.random() * 100000000),
        text: text.value,
        amount: amt,
        type: type,
        category: category,
        date: new Date().toLocaleDateString()
    };

    transactions.push(transaction);
    updateLocalStorage();
    init();

    form.reset();
    modal.classList.remove('active');
}

function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== Number(id));
    updateLocalStorage();
    init();
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Calculate Totals
function updateValues() {
    // const balanceText = balance.innerText;
    // let currentBal = parseFloat(balanceText);

    let total = 0;
    let inc = 0;
    let exp = 0;

    transactions.forEach(t => {
        total += t.amount;

        if (t.amount > 0) {
            inc += t.amount;
        } else {
            exp += t.amount;
        }
    });

    balance.innerText = `$${total.toFixed(2)}`;
    income.innerText = `$${inc.toFixed(2)}`;
    expense.innerText = `$${Math.abs(exp).toFixed(2)}`;
}

// Render Transactions
function renderTransactions() {
    list.innerHTML = '';

    let filtered = transactions;

    // Filter Search
    const query = searchInput.value;
    if (query) {
        filtered = filtered.filter(t => t.info.includes(query));
    }

    if (currentFilter !== 'all') {
        filtered = filtered.filter(t => t.type === currentFilter);
    }

    filtered.forEach(transaction => {
        const sign = transaction.amount < 0 ? '-' : '+';
        const itemClass = transaction.amount < 0 ? 'amount-expense' : 'amount-income';
        const item = document.createElement('li');

        item.classList.add('transaction-item');
        item.innerHTML = `
            <div class="item-icon">${categoryIcons[transaction.category] || '📦'}</div>
            <div class="item-details">
                <p>${transaction.text}</p>
                <span>${transaction.date}</span>
            </div>
            <div class="item-amount ${itemClass}">
                ${sign}$${Math.abs(transaction.amount)}
            </div>
            <button class="delete-btn" onclick="removeTransaction('${transaction.id}')">
                🗑️
            </button>
        `;

        list.appendChild(item);
    });
}

function init() {
    renderTransactions();
    updateValues();
}

form.addEventListener('submit', addTransaction);
openModalBtn.addEventListener('click', () => modal.classList.add('active'));
closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

searchInput.addEventListener('input', renderTransactions);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTransactions();
    });
});

init();
