using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

    /*
     * Complete the 'organizingContainers' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts 2D_INTEGER_ARRAY container as parameter.
     */

    public static string organizingContainers(List<List<int>> container)
    {
        List<long> Columized = new List<long>();
        List<long> Rowized = new List<long>();
        
        for(int i=0 ; i < container.Count ; i++ )
        {
            long rowVal = 0;
            long colVal = 0;
            //Rowized.Add(container[i].Sum());
            for(int j = 0; j < container.Count ; j++)
            {
                rowVal += container[i][j];
                colVal += container[j][i];
            }
            Rowized.Add(rowVal);
            Columized.Add(colVal);
            //debug
            //  Console.Write("Row : " + Rowized[i] + "\n");
            //  Console.Write("Column : " + Columized[i] + "\n");
        }

        foreach(var item in Columized)
        {
            if(!Rowized.Contains(item))
            return "Impossible";
        }

        return "Possible";
    }

}
class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int q = Convert.ToInt32(Console.ReadLine().Trim());

        for (int qItr = 0; qItr < q; qItr++)
        {
            int n = Convert.ToInt32(Console.ReadLine().Trim());

            List<List<int>> container = new List<List<int>>();

            for (int i = 0; i < n; i++)
            {
                container.Add(Console.ReadLine().TrimEnd().Split(' ').ToList().Select(containerTemp => Convert.ToInt32(containerTemp)).ToList());
            }

            string result = Result.organizingContainers(container);

            textWriter.WriteLine(result);
        }

        textWriter.Flush();
        textWriter.Close();
    }
}
