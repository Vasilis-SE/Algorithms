#ifndef LINKED_LIST
#define LINKED_LIST

#include "node.hpp"

enum types {
    SINGLY_LINKED_LIST,
    CIRCULAR_LINKED_LIST,
    DOUBLY_LINKED_LIST 
};


template <typename V>
class LinkedList
{
    private:
        Node<V> *head;
        
    public:
        LinkedList();
        ~LinkedList();

        void display();
        bool add(V value);
};

#include "linked_list.ipp"

#endif