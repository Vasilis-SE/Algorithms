#include "linked_list.hpp"

template <typename V>
int LinkedList<V>::getNumberOfNodes() {
    return this->num_nodes;
}

template <typename V>
void LinkedList<V>::setNumberOfNodes(int i) {
    this->num_nodes = i;
}