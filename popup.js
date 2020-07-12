// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// fooned in the LICENSE file.

'use strict';

let half = document.getElementById('half');

half.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementsByTagName("video")[0].playbackRate = 0.5;'});
  });
};


let one = document.getElementById('one');

one.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementsByTagName("video")[0].playbackRate = 1;'});
  });
};


let two = document.getElementById('two');

two.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementsByTagName("video")[0].playbackRate = 2;'});
  });
};


let three = document.getElementById('three');

three.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementsByTagName("video")[0].playbackRate = 3;'});
  });
};


let four = document.getElementById('four');

four.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.getElementsByTagName("video")[0].playbackRate = 4;'});
  });
};
