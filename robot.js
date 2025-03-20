"use strict";
/*
 *
 *
 * @Project: A little program that performs various tasks a virtual world
 *           A mail delivering robot that picks up and drops off parcels.
 * 
 * */

// All the roads that connects the 11 places that makes up the virtual town
const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
];

/**
 *
 * 
 * @param {array} roads
 * @returns {Object} connected roads(graph)
 * 
 * 
 */

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdges(from, to) {
        if (graph[from] == null) {
            graph[from] = [to]; // new graph point
        }
        else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdges(from, to);
        addEdges(to, from);
    }

    return graph;
}

// build the road graph
const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        // checks if there's a route from the current place
        // to the destination the parcel is going to
        if (!roadGraph[this.place].includes(destination)) {
            // return the current(old) state if no route
            return this;
        }
        // route found
        else {
            let parcels = this.parcels.map(p => {
                // checks if the current place is different from
                // the place where the parcel is going to
                // if not, return the parcel object for movement
                if (p.place != this.place) return p;
                
                // return the destination object - destination name and address
                // if both are the same (current location and parcel destination)
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address); // filter out the places that are not equal to parcel destination address in order for the robot to get to the destination
            return new VillageState(destination, parcels);
        }
    }
}

// testing
let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
    );
    let next = first.move("Alice's House");

console.log(next.place);
console.log(next.parcels);
console.log(first.place);