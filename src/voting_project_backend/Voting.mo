import Trie "mo:base/Trie";

actor Voting {
    stable var topics : Trie.Trie<Text, [Nat, Nat]> = Trie.empty(); // (Yes votes, No votes)
    stable var votesCast : Trie.Trie<Principal, Bool> = Trie.empty(); // Track votes by user

    public shared(msg) func addTopic(topic : Text) : async () {
        topics := Trie.put(topics, topic, [0, 0]);
    };

    public shared(msg) func vote(topic : Text, vote : Bool) : async () {
        let user = msg.caller;
        if (Trie.find(votesCast, user) == null) {
            let result = Trie.find(topics, topic);
            switch (result) {
                case (?yesVotes, noVotes) {
                    if (vote) {
                        topics := Trie.put(topics, topic, [yesVotes + 1, noVotes]);
                    } else {
                        topics := Trie.put(topics, topic, [yesVotes, noVotes + 1]);
                    };
                    votesCast := Trie.put(votesCast, user, true);
                };
                case null {
                    throw Error.reject("Topic not found.");
                };
            };
        } else {
            throw Error.reject("You have already voted.");
        };
    };

    public shared(msg) func getResult(topic : Text) : async ?[Nat, Nat] {
        return Trie.find(topics, topic);
    };
};
