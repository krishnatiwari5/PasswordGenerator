#include<iostream>
using namespace std;

int main() {

float km;
cout<<"Please Enter the distance in kilometer : "<<endl;
cin>>km;

// int km = 1;

float m, inches, feet, cm;

m= km*1000;
cm = 100*km;
inches = 39370.1 * km;
feet = 3280.84 * km;


cout<<"your distance in meters :- "<<m<<endl;
cout<<"your distance in inches :- "<<inches<<endl;
cout<<"your distance in feet :- "<<feet<<endl;
cout<<"your distance in cm :- "<<cm<<endl;

    return 0;
}