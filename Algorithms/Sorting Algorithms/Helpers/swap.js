const swap = (arr, idx1, idx2) => {
    [ arr[idx1], arr[idx2]  ] = [ arr[idx2], arr[idx1]  ];
};

module.exports = swap;