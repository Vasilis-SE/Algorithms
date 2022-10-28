#include <stdbool.h>  
#include <stdlib.h>
#include <iostream>

#include "node.hpp"
#include "circular_linked_list.hpp"

template <typename V> 
CircularLinkedList<V>::CircularLinkedList() {
    this->head = NULL;
}

template <typename V> 
CircularLinkedList<V>::~CircularLinkedList() {}

template <typename V>
bool CircularLinkedList<V>::add(V value) {
    Node<V> *new_node = new Node<V>(value);

    if(this->head == NULL) {
        this->head = new_node;
        new_node->setNext(this->head);
        return true;
    }

    Node<V> *current_node = this->head;
    while(current_node->getNext() != this->head) 
        current_node = current_node->getNext();

    current_node->setNext(new_node);
    new_node->setNext(this->head);
    return true;
}

template <typename V>
void CircularLinkedList<V>::display() {
    std::cout << "Linked List Content: " << '\n';

    Node<V> *current_node = this->head;
    while(current_node->getNext() != this->head) {
        std::cout << "\t => [" << &(*current_node) << "] " << current_node->getValue() << '\n';
        current_node = current_node->getNext();
    }

    // Display the final node's value
    std::cout << "\t => [" << &(*current_node) << "] " << current_node->getValue() << '\n';
}