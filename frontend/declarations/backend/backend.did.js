export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getAddress' : IDL.Func([], [IDL.Text], ['query']),
    'getHours' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        ['query'],
      ),
    'getMenu' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text, IDL.Nat))],
        ['query'],
      ),
    'getRestaurantInfo' : IDL.Func([], [IDL.Text, IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
