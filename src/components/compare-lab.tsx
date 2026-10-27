import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { objects } from "@/lib/catalog";
import { Shell, Eyebrow } from "./shell";

const comparable = objects.filter((item) => item.metrics && (item.metrics.radiusKm || item.metrics.massKg || item.metrics.tempK || item.metrics.distanceLy || item.metrics.spanLy));

function format(value?: number, unit?: string) {
  if (value === undefined || Number.isNaN(value)) return "Not available";
  if (value === 0) return unit === "ly" ? "0 (you are here, for the Milky Way)" : "0";
  const abs = Math.abs(value);
  const text = abs >= 1000 || abs < 0.01 ? value.toExponential(2) : value.toLocaleString(undefined, { maximumSignificantDigits: 4 });
  return unit ? `${text} ${unit}` : text;
}

export function CompareLab({ initialA, initialB }: { initialA?: string; initialB?: string }) {
  const [a, setA] = useState(initialA && objects.some((item) => item.slug === initialA) ? initialA : "earth");
  const [b, setB] = useState(initialB && objects.some((item) => item.slug === initialB) ? initialB : "mars");
  const left = objects.find((item) => item.slug === a) ?? objects[0];
  const right = objects.find((item) => item.slug === b) ?? objects[1];

  const rows = useMemo(() => {
    const pairs = [
      ["Radius (km)", left.metrics?.radiusKm, right.metrics?.radiusKm],
      ["Mass (kg)", left.metrics?.massKg, right.metrics?.massKg],
      ["Temperature (K)", left.metrics?.tempK, right.metrics?.tempK],
      ["Distance (ly)", left.metrics?.distanceLy, right.metrics?.distanceLy],
      ["Span (ly)", left.metrics?.spanLy, right.metrics?.spanLy],
    ] as const;
    return pairs.map(([name, l, r]) => ({
      name,
      left: l && l > 0 ? l : null,
      right: r && r > 0 ? r : null,
    }));
  }, [left, right]);

  const chartData = rows
    .filter((row) => row.left && row.right)
    .map((row) => ({
      name: row.name.split(" ")[0],
      [left.name]: row.left as number,
      [right.name]: row.right as number,
    }));

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <Eyebrow>Compare the cosmos</Eyebrow>
        <h1 className="mt-3 font-display text-5xl">Put two worlds on one bench</h1>
        <p className="mt-4 max-w-2xl text-mist">
          Bars use a logarithmic axis because the numbers sprawl. Missing measurements stay missing. A radius for a galaxy is a span, not a hard surface, and temperatures for stars and planets do not mean the same physical layer.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Select label="First" value={a} onChange={setA} />
          <Select label="Second" value={b} onChange={setB} />
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Card objectSlug={left.slug} name={left.name} rows={[
            ["Radius", format(left.metrics?.radiusKm, "km")],
            ["Mass", format(left.metrics?.massKg, "kg")],
            ["Temperature", format(left.metrics?.tempK, "K")],
            ["Distance", format(left.metrics?.distanceLy, "ly")],
            ["Span", format(left.metrics?.spanLy, "ly")],
          ]} />
          <Card objectSlug={right.slug} name={right.name} rows={[
            ["Radius", format(right.metrics?.radiusKm, "km")],
            ["Mass", format(right.metrics?.massKg, "kg")],
            ["Temperature", format(right.metrics?.tempK, "K")],
            ["Distance", format(right.metrics?.distanceLy, "ly")],
            ["Span", format(right.metrics?.spanLy, "ly")],
          ]} />
        </div>
        {chartData.length > 0 ? (
          <div className="mt-8 h-72 border border-line bg-midnight p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#a1a6b1" />
                <YAxis scale="log" domain={["auto", "auto"]} stroke="#a1a6b1" width={64} />
                <Tooltip contentStyle={{ background: "#171a20", border: "1px solid #2a2e36", color: "#f5f3ee" }} />
                <Bar dataKey={left.name} fill="#ff653e" />
                <Bar dataKey={right.name} fill="#79d8ff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="mt-8 border border-line p-4 text-sm text-mist">These two records do not share a positive numeric field that can be plotted. Read the table instead of inventing a bar.</p>
        )}
        <p className="mt-4 text-sm text-mist">
          {left.name} and {right.name} are not the same kind of thing unless their classifications say so. {left.classification}. {right.classification}.
        </p>
      </div>
    </Shell>
  );
}

function Select({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="block text-sm text-mist">
      {label}
      <select
        className="mt-2 h-12 w-full border border-line bg-void px-3 text-ink"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {comparable.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function Card({ name, objectSlug, rows }: { name: string; objectSlug: string; rows: [string, string][] }) {
  return (
    <section className="border border-line p-5">
      <h2 className="font-display text-3xl">{name}</h2>
      <dl className="mt-4 grid gap-3">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-baseline justify-between gap-4">
            <dt className="text-sm text-mist">{label}</dt>
            <dd className="font-mono text-sm text-ink">{value}</dd>
          </div>
        ))}
      </dl>
      <Link to="/object/$slug" params={{ slug: objectSlug }} className="mt-4 inline-flex h-11 items-center text-sm text-cyan">
        Open profile
      </Link>
    </section>
  );
}
