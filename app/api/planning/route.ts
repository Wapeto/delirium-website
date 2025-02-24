import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Read the JSON file
    const filePath = path.join(process.cwd(), 'data', 'planning.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContents);
    
    // Return the data as JSON
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error loading planning data:', error);
    return NextResponse.json(
      { error: 'Failed to load planning data', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}