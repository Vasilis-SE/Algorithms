#ifndef LINKED_LIST
#define LINKED_LIST

enum types {
    SINGLY_LINKED_LIST,
    CIRCULAR_LINKED_LIST,
    DOUBLY_LINKED_LIST 
};

template <typename V>
class LinkedList
{
    private:
        Node<V> head;
        int num_of_nodes;

    public:
        LinkedList();
        ~LinkedList();

        bool add(V value);
};

#include "linked_list.ipp"

#endif