import { Article } from "@/types/article.types";
import React from "react";

interface SortableTableProps {
  headers: { key: string; label: string }[];
  data: Article[];
}

const SortableTable: React.FC<SortableTableProps> = ({ headers, data }) => (
  <table style={{ borderCollapse: 'collapse', width: '100%', border: '1px solid black' }}>
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header.key} style={{ border: '1px solid black', padding: '8px' }}>{header.label}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {headers.map((header) => (
            <td key={header.key} style={{ border: '1px solid black', padding: '8px' }}>
              {row[header.key as keyof Article]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default SortableTable;