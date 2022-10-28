#ifndef CIRCULAR_LINKED_LIST
#define CIRCULAR_LINKED_LIST

#include "node.hpp"
#include "linked_list.hpp"

template <typename V>
class CircularLinkedList : public LinkedList<V>
{
private:
    Node<V> *head;

public:
    CircularLinkedList();
    ~CircularLinkedList();

    void display();
    bool add(V value);
};

#include "circular_linked_list.ipp"

#endif