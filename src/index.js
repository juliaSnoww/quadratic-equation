module.exports = function solveEquation(equation) {
    let array = equation.split(' ');
    let a = parseInt(array[0]);
    let b = parseInt(array[3] + array[4]);
    let c = parseInt(array[7] + array[8]);
    let discriminant = Math.sqrt(b * b - 4 * a * c);
    let roots = [];
    roots[0] = Math.round((-b - discriminant) / (2 * a));
    roots[1] = Math.round((-b + discriminant) / (2 * a));
    return roots.sort(((left, right) => left - right));
};
    