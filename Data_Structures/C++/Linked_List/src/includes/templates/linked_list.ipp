#include <stdbool.h>  
#include <stdlib.h>

#include "node.hpp"
#include "linked_list.hpp"

template <class V> 
LinkedList<V>::LinkedList() {
    this->head = NULL;
    this->num_of_nodes = 0;
}

template <class V> 
LinkedList<V>::~LinkedList() {}

template <class V>
bool LinkedList<V>::add(V value) {
    Node<V> new_node = Node(value);

    if(this->num_of_nodes == 0) {
        this->head = new_node;
        this->head->setNext(NULL);
        return true;
    }

    return true;
}