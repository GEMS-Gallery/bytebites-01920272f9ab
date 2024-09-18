import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";

actor Restaurant {
    // Restaurant information
    private stable var name : Text = "Josh's Cafe";
    private stable var description : Text = "Your go-to spot for healthy and delicious meals in a cozy atmosphere.";
    
    // Hours of operation
    private stable var hours : [(Text, Text)] = [
        ("Monday", "8:00 AM - 5:00 PM"),
        ("Tuesday", "8:00 AM - 5:00 PM"),
        ("Wednesday", "8:00 AM - 5:00 PM"),
        ("Thursday", "8:00 AM - 5:00 PM"),
        ("Friday", "8:00 AM - 5:00 PM"),
        ("Saturday", "Closed"),
        ("Sunday", "Closed")
    ];

    // Address information
    private stable var address : Text = "123 Pine St Test CA";

    // Menu items
    private stable var menu : [(Text, Text, Nat)] = [
        ("Quinoa Bowl", "Nutrient-rich quinoa with mixed vegetables and grilled chicken", 1299),
        ("Avocado Toast", "Whole grain toast topped with smashed avocado and seeds", 899),
        ("Green Smoothie", "Blend of spinach, banana, and almond milk", 699),
        ("Grilled Salmon Salad", "Fresh greens with grilled salmon and light vinaigrette", 1499)
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
