#include <iostream>
#include <vector>
#include <cmath>
#include <iomanip>
#include<bits/stdc++.h>

using namespace std;

int main() {
    int posk, num;
    cin >> posk >> num;

    vector<int> retailers(num);
    for (int i = 0; i < num; i++) {
        cin >> retailers[i];
    }

    int xN1, yN1;
    cin >> xN1 >> yN1;

    // Calculate the distances
    double minDist = 0.0;

    // If posk is not the head retailer, add the distance from posk to the head retailer
    if (posk != num + 1) {
        double dist = sqrt(pow(xN1 - retailers[posk - 1], 2) + pow(yN1, 2));
        minDist += dist;
    }

    // Sort the retailers' positions in ascending order
    sort(retailers.begin(), retailers.end());

    // Calculate the distances between consecutive retailers
    for (int i = 0; i < num - 1; i++) {
        double dist = retailers[i + 1] - retailers[i];
        minDist += dist;
    }

    // Output the result rounded to 6 decimal places
    cout << fixed << setprecision(6) << minDist << endl;

    return 0;
}