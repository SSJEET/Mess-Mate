#include <stdio.h>

// Function to calculate debt
double calculateDebt(double balance, double cost) {
    return balance - cost;
}

// Expose function to WebAssembly
double calculate(double balance, double cost) {
    return calculateDebt(balance, cost);
}
