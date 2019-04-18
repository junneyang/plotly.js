/**
* Copyright 2012-2019, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

exports.isGrouped = function(legendLayout) {
    return (legendLayout.traceorder || '').indexOf('grouped') !== -1;
};

exports.isVertical = function(legendLayout) {
    return legendLayout.orientation !== 'h';
};

exports.isReversed = function(legendLayout) {
    return (legendLayout.traceorder || '').indexOf('reversed') !== -1;
};
