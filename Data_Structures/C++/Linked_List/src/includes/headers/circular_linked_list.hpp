#ifndef CIRCULAR_LINKED_LIST
#define CIRCULAR_LINKED_LIST

#include "node.hpp"
#include "linked_list.hpp"

template <typename V>
class CircularLinkedList : public LinkedList<V>
{
private:
    int num_nodes;
    Node<V> *head;

public:
    CircularLinkedList();
    ~CircularLinkedList();

    bool add(V value);
    Node<V>* findByIndex(int idx);
    void display();
};

#include "circular_linked_list.ipp"

#endif