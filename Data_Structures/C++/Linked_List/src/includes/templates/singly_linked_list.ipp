#include <stdbool.h>  
#include <stdlib.h>
#include <iostream>

#include "node.hpp"
#include "singly_linked_list.hpp"

template <typename V> 
SinglyLinkedList<V>::SinglyLinkedList() {
    this->head = NULL;
}

template <typename V> 
SinglyLinkedList<V>::~SinglyLinkedList() {}

template <typename V>
void SinglyLinkedList<V>::display() {
    std::cout << "Linked List Content: " << '\n';

    Node<V> *current_node = this->head;
    while(current_node != NULL) {
        std::cout << "\t => [" << &(*current_node) << "] " << current_node->getValue() << '\n';
        current_node = current_node->getNext();
    }
}

template <typename V>
bool SinglyLinkedList<V>::add(V value) {
    Node<V> *new_node = new Node<V>(value);

    if(this->head == NULL) {
        this->head = new_node;
        return true;
    }

    Node<V> *current_node = this->head;
    while(current_node->getNext() != NULL) 
        current_node = current_node->getNext();

    current_node->setNext(new_node);
    return true;
}