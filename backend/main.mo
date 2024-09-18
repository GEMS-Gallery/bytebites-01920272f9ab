import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";

actor Restaurant {
    // Restaurant information
    private stable var name : Text = "Gourmet Delights";
    private stable var description : Text = "Experience culinary excellence at Gourmet Delights, where every dish tells a story.";
    
    // Hours of operation
    private stable var hours : [(Text, Text)] = [
        ("Monday", "11:00 AM - 9:00 PM"),
        ("Tuesday", "11:00 AM - 9:00 PM"),
        ("Wednesday", "11:00 AM - 9:00 PM"),
        ("Thursday", "11:00 AM - 9:00 PM"),
        ("Friday", "11:00 AM - 10:00 PM"),
        ("Saturday", "10:00 AM - 10:00 PM"),
        ("Sunday", "10:00 AM - 8:00 PM")
    ];

    // Address information
    private stable var address : Text = "123 Gourmet Street, Foodville, FD 12345";

    // Menu items
    private stable var menu : [(Text, Text, Nat)] = [
        ("Signature Steak", "Prime cut beef with herb butter", 2999),
        ("Seafood Pasta", "Fresh seafood in a creamy garlic sauce", 2499),
        ("Vegetarian Delight", "Grilled vegetables with quinoa", 1899),
        ("Chocolate Lava Cake", "Rich chocolate cake with a molten center", 899)
    ];

    // Query functions
    public query func getRestaurantInfo() : async (Text, Text) {
        (name, description)
    };

    public query func getHours() : async [(Text, Text)] {
        hours
    };

    public query func getAddress() : async Text {
        address
    };

    public query func getMenu() : async [(Text, Text, Nat)] {
        menu
    };
}
