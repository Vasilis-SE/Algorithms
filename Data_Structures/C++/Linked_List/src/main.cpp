#include "singly_linked_list.hpp"
#include "circular_linked_list.hpp"

#include <iostream>
#include <string>


int main() {
    // // Integer data type
    // LinkedList<int> *lli = new SinglyLinkedList<int>();
    // lli->add(2);
    // lli->add(3);
    // lli->add(4);
    // lli->display();

    // // Char data type
    // LinkedList<char> llc;
    // llc.add('A');
    // llc.add('B');
    // llc.display();

    // // Double data type
    // LinkedList<double> lld;
    // lld.add(1.56);
    // lld.add(4.37);
    // lld.display();

    // // Float data type
    // LinkedList<float> llf;
    // llf.add(1.56);
    // llf.add(4.37);
    // llf.display();

    // // C++ string std data type
    // LinkedList<std::string> lls1;
    // lls1.add("Hello");
    // lls1.add("World");
    // lls1.display();

    // // C/C++ string literal to pointer (deprecated)
    // char *p_sl;
    // p_sl = "Hello C/C++ world !!";
    // LinkedList<char*> llpsl;
    // llpsl.add(p_sl);
    // llpsl.display();

    // // C/C++ string literal to array (deprecated)
    // char sla[26] = "String literal to array!!";
    // LinkedList<char*> llsla;
    // llsla.add(sla);
    // llsla.display();

    // // C/C++ constant string literal to pointer
    // char const *p_csl = "Constant string literal to array!!";
    // LinkedList<const char*> llcpsl;
    // llcpsl.add(p_csl);
    // llcpsl.display();

    // // C styled array of chars as string data type with pre-defined size
    // char hello[6] = {'H', 'e', 'l', 'l', 'o', '\0'};
    // LinkedList<char*> llcs;
    // llcs.add(hello);
    // llcs.display();

    // int ia[6] = {1,2,3,4,5};
    // LinkedList<int*> llia;
    // llia.add(ia);
    // llia.display();


    // Integer data type
    LinkedList<int> *lli = new CircularLinkedList<int>();
    lli->add(2);
    lli->add(3);
    lli->add(4);
    lli->display();

    Node<int> *n;

    int index = 1;
    n = lli->findByIndex(index);
    std::cout << "Node's value on posiiton " << index << " is " << n->getValue() << "\n";

    index = 3;
    n = lli->findByIndex(index);
    std::cout << "Node's value on posiiton " << index << " is " << n->getValue() << "\n";

    index = 0;
    n = lli->findByIndex(index);
    std::cout << "Node's value on posiiton " << index << " is " << n->getValue() << "\n";

    index = 8;
    n = lli->findByIndex(index);
    std::cout << "Node's value on posiiton " << index << " is " << n->getValue() << "\n";


    return 0;
}


// gcc 
//     -fdiagnostics-color=always 
//     -g D:\repositories\Algorithms\Data_Structures\C++\Linked_List\src/**.cpp 
//     -o D:\repositories\Algorithms\Data_Structures\C++\Linked_List\src\bin\main.exe 
//     -I D:\repositories\Algorithms\Data_Structures\C++\Linked_List\src\includes