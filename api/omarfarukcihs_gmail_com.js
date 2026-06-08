export default function handler(req, res) {
  const { x, y } = req.query;

  const numX = Number(x);
  const numY = Number(y);

  const isNaturalNumber = (n) => Number.isInteger(n) && n > 0;

  if (!isNaturalNumber(numX) || !isNaturalNumber(numY)) {
    res.setHeader("Content-Type", "text/plain");
    return res.status(200).send("NaN");
  }

  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const lcm = (numX * numY) / gcd(numX, numY);

  res.setHeader("Content-Type", "text/plain");
  return res.status(200).send(String(lcm));
}

